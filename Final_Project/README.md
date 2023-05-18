## Suscripción de clientes de bancos portugueses a un depósito trimestral (Producto)

### Introducción

El objetivo de este proyecto va a ser la creación e implementación de un algoritmo predictivo, compuesto por un conjunto de
variables cómo pueden ser edad,profesión,estudios,... que sea capaz de predecir si el cliente se suscribirá al producto o no.
Entiendo yo que con el objetivo de saber si la campaña de marketing va a ser rentable o no.

### Campaña de marketing

1. Fuentes
   Created by: Paulo Cortez (Univ. Minho) and Sérgio Moro (ISCTE-IUL) @ 2012
   
2. Uso pasado:

      El conjunto de datos completo fue descrito y analizado por:

      S. Moro, R. Laureano y P. Cortez. Utilización de la Minería de Datos para el Marketing Directo Bancario: Una Aplicación de la Metodología CRISP-DM.
      En P. Novais et al. (Eds.), Actas de la Conferencia Europea de Simulación y Modelado - ESM'2011, pp. 117-121, Guimarães, Portugal, octubre de 2011. EUROSIS.

3. Información relevante:

   Los datos están relacionados con campañas de marketing de una institución portuguesa de bancos. 
   Las campañas de marketing fueron realizadas por llamadas móviles.A menudo,se requirió más de un contacto al mismo cliente para determinar si el producto (depósito trimestral bancario) sería o no suscrito. 

   El objetivo es predecir si el client se suscribirá a esa subscripción (variable y en el csv).

4. Número de filas: 45211

5. Numero de variables: 16 + salida.


### Descripción de las variables.

- age (numeric)
- job : type of job (categorical: "admin","unknown","unemployed","management","housemaid","entrepreneur","student","blue-collar","self-employed","retired","technician","services") 
- marital : marital status (categorical: "married","divorced","single"; note: "divorced" means divorced or widowed)
- education (categorical: "unknown","secondary","primary","tertiary")
- default: has credit in default? (binary: "yes","no")
- balance: average yearly balance, in euros (numeric) 
- housing: has housing loan? (binary: "yes","no")
- loan: has personal loan? (binary: "yes","no")

Related with the last contact of the current campaign:
- contact: contact communication type (categorical: "unknown","telephone","cellular") 
- day: last contact day of the month (numeric)
- month: last contact month of year (categorical: "jan", "feb", "mar", ..., "nov", "dec")
- duration: last contact duration, in seconds (numeric)

ther attributes:
- campaign: number of contacts performed during this campaign and for this client (numeric, includes last contact)
- pdays: number of days that passed by after the client was last contacted from a previous campaign (numeric, -1 means client was not previously contacted)
- previous: number of contacts performed before this campaign and for this client (numeric)
- poutcome: outcome of the previous marketing campaign (categorical: "unknown","other","failure","success")

Output variable (desired target):
- y - has the client subscribed a term deposit? (binary: "yes","no")
