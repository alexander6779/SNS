from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from controller import predict
from fastapi.responses import JSONResponse

app = FastAPI()

# the request base model with the params
class Request(BaseModel):
    age: int
    job: int
    education: int
    marital : int
    default: int
    balance: int
    contact: int
    housing: int
    loan: int
    day: int
    month : int
    duration : int
    campaign : int
    pdays: int
    previous : int
    poutcome: int
    

# Configuración de CORS
origins = [
    "http://127.0.0.1:5500",
    "http://localhost",
    "http://localhost:80",
    "http://localhost:8080", # the origin of my live server, due to this is not an oficial task with professional achivements, i dont use env file
]


# inicialization of the middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# post endpoint that returns the prediction
@app.post("/get-Results")
async def read_root(datos : Request):
    pred = predict(datos)
    return JSONResponse(content=[pred])
    