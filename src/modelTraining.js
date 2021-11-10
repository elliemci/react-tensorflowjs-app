import * as tf from '@tensorflow/tfjs'


/* function buildModel(numOfFeatures) {

    const model = tf.sequential({
        layers: [
            tf.layers.dense({ inputShape: [numOfFeatures], units: 12, activation: 'relu' }),
            tf.layers.dense({ units: 8, activation: 'relu' }),
            tf.layers.dense({ units: 3, activation: 'softmax' }) // ouput 3 for the 3 types of training, soft max for multiple outputs
        ]
    });

    const learningRate = 0.001;
    const optimizer = tf.train.adam(learningRate);

    model.compile({
        optimizer: optimizer,
        loss: "categoricalCrossentropy", // for multiple outputs
        metrics: ['accuracy'],
    });

    return model;

};*/
function buildModel(numOfFeatures) {
    const model = tf.sequential();

    model.add(tf.layers.dense({
        inputShape: [numOfFeatures],
        units: 12,
        activation: 'relu'
    }));
    model.add(tf.layers.dense({
        units: 8,
        activation: 'relu'
    }));
    model.add(tf.layers.dense({
        units: 3,
        activation: 'softmax'
    }));

    model.compile({ optimizer: tf.train.adam(0.001), loss: 'categoricalCrossentropy', metrics: 'accuracy' });

    return model;
};

export async function runTraining(convertedDatasetTraining, convertedDatasetValidation, numOfFeatures) {

    const model = buildModel(numOfFeatures);

    const hist = await model.fitDataset(

        convertedDatasetTraining, // dataset
        {                         // arg, an object 
            epochs: 100,
            validationData: convertedDatasetValidation,
            callbacks: {
                onEpochEnd: (epoch, logs) => {  // a list of callbacks to be called during training
                    console.log("Epoch: " + epoch +
                        " Loss: " + logs.loss +
                        " Accuracy: " + logs.acc +
                        " Validation loss: " + logs.val_loss +
                        " Validation accuracy: " + logs.val_acc);
                }
            }
        }
    );
    // await model.save('downloads://fitness-assistant-model'); downloads the .json and binary weight values files
    await model.save('localstorage://fitness-assistant-model'); //saves the model in the browser's local storage

    // save the model in local browser IndexDB storage which allows larger limits on the objects sizes
    //await model.save('indexddb://fitness-assistant-model');
    console.log("Model saved!");

};

/*
const loadedModel = await tf.loadLayersModel('fitness-assistant-model');
console.log('Prediction from loaded model:');
loadedModel.predict(...).print();
*/