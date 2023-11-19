from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import asyncio

app = FastAPI()


class Broker:
    messages: list[str] = []
    clients: list[asyncio.Queue] = []

    def publish(self, message: str):
        self.messages.append(message)

    def subscribe(self):
        queue = asyncio.Queue()
        self.clients.append(queue)
        return queue

    async def run(self):
        while True:
            if len(self.messages) > 0:
                message = self.messages.pop(0)

                for client in self.clients:
                    await client.put(f"data: {message}\n\n")

            await asyncio.sleep(0.001)


broker = Broker()


@app.get("/chat")
async def sse():
    async def event_generator():
        queue = broker.subscribe()

        yield "event: connected\n\n"

        try:
            while True:
                yield await queue.get()

        except asyncio.CancelledError:
            broker.clients.remove(queue)

    return StreamingResponse(event_generator(), media_type="text/event-stream")


class Message(BaseModel):
    message: str


@app.post("/chat")
async def sse(message: Message):
    broker.publish(message.message)
    return {"status": "ok"}


@app.on_event("startup")
async def startup_event():
    asyncio.create_task(broker.run())
