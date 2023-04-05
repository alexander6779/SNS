# Se reciben los valores y el modelo, devuelve la predicción
import joblib
import numpy as np

def model_prediction(x_in, model):

    x = np.asarray(x_in).reshape(1,-1)
    preds=model.predict(x)

    return preds


def main(i,item):   
    if i ==1 :
        model = joblib.load('./Modelo_entrenado_entradas.pkl')
        x_in = [np.float_(item.parking),
            np.float_(item.day),
            np.float_(item.month),
            np.float_(item.year),
            np.float_(item.holiday),
            np.float_(item.school_day),
            np.float_(item.hour),
            np.float_(item.temperature),
            np.float_(item.humidity),
            np.float_(item.day_week)]
        predictS = model_prediction(x_in, model)
    else:
        model = joblib.load('./Modelo_entrenado_salidas.pkl')             
        x_in =[np.float_(item.parking),
                    np.float_(item.day),
                    np.float_(item.month),
                    np.float_(item.year),
                    np.float_(item.holiday),
                    np.float_(item.school_day),
                    np.float_(item.hour),
                    np.float_(item.temperature),
                    np.float_(item.humidity),
                    np.float_(item.day_week)]
        predictS = model_prediction(x_in, model)
        
    return int(predictS[0])