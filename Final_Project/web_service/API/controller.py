import joblib
import numpy as np

def model_prediction(x_in, model):

    x = np.asarray(x_in).reshape(1,-1)
    preds=model.predict(x)

    return preds


def preparationData(item,model):
    scaler = joblib.load('./models/escalador_suscripción.pkl')
    x_in = [np.float_(item.age),
                np.float_(item.job),
                np.float_(item.education),
                np.float_(item.marital),
                np.float_(item.default),
                np.float_(item.balance),
                np.float_(item.contact),
                np.float_(item.housing),
                np.float_(item.loan),
                np.float_(item.day),
                np.float_(item.month),
                np.float_(item.duration),
                np.float_(item.campaign),
                np.float_(item.pdays),
                np.float_(item.previous),
                np.float_(item.poutcome)]
    x_in = np.asarray(x_in).reshape(1,-1)
    x_in = scaler.transform(x_in)
    predictS = model_prediction(x_in, model)
    return int(predictS[0])

#method to instanciate the model and add it the params then we call the function model_prediction to get the prediction
# I also use i as an id to know if what we are guessing are entries or exits.
def predict(item):  

    model = joblib.load('./models/Modelo_entrenado_suscripción.pkl')             
    data = preparationData(item,model)  
        
    return data