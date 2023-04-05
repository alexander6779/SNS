from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from controller import main
from fastapi.responses import JSONResponse

app = FastAPI()


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
    "http://127.0.0.1:5500" # El origen que estás utilizando si estas con live server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/get-Entradas")
async def read_root(entrada : Request):
    print('entrada')
    pred = main(1,entrada)
    return JSONResponse(content=pred)
    


@app.post("/get-Salidas")
async def read_root(salida : Request):
    print('salida')
    pred = main(2,salida)
    print(pred)  
    return JSONResponse(content=pred)

