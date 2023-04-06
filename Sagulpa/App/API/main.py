from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from controller import main
from fastapi.responses import JSONResponse

app = FastAPI()

# the request base model with the params
class Request(BaseModel):
    parking:int
    day: int
    month:int
    year:int
    hour:int
    school_day:int
    holiday:int
    temperature:int
    humidity:int
    day_week : int


# Configuración de CORS
origins = [
    "http://127.0.0.1:5500" # the origin of my live server, due to this is not an oficial task with professional achivements, i dont use env file
]


# inicialization of the middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# post endpoint to know entries and returns a result
@app.post("/get-Entradas")
async def read_root(entrada : Request):
    pred = main(1,entrada)
    return JSONResponse(content=pred)
    

# post endpoint to know exits and returns a result
@app.post("/get-Salidas")
async def read_root(salida : Request):
    pred = main(2,salida)
    print(pred)  
    return JSONResponse(content=pred)

