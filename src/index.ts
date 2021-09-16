import { readIngredients } from "./ocr"
import { isVegan } from "./vegan-checker";

const filePicker = (document.querySelector("#photo-picker") as HTMLInputElement);
const pic = (document.querySelector("#ingredients-photo") as HTMLImageElement);

filePicker.onchange =  () => {
    var fileList = filePicker.files;
    const image = window.URL.createObjectURL(fileList![0]);
    pic.src = image;
    checkIfVegan(image)
 }

const checkIfVegan = (image: string) => {
    const ingredients = readIngredients(image).then( (ingredients: string) => {
        (document.querySelector("#ingredients") as HTMLElement).innerHTML = ingredients;

        const ingredientsAreVegan = isVegan(ingredients);
    
        const message = `The item is: ${ingredientsAreVegan.vegan ? "VEGAN" : "NOT VEGAN"}`;
        const veganEl = document.querySelector("#vegan")
        if (veganEl) veganEl.innerHTML = message;
    
        console.log(ingredientsAreVegan.offendingIngredients);
    }).catch(e => console.warn(e));
    
}

let video = (document.getElementById('video') as HTMLVideoElement);
let canvas = (document.getElementById('canvas') as HTMLCanvasElement);

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video!.srcObject = stream;
        video!.play();
    });
}

document.getElementById("snap")!.addEventListener("click", function() {
    const context = canvas.getContext("2d")!;
	context.drawImage(video, 0, 0, 640, 480);
    const image = canvas.toDataURL();
    pic.src = image;
    checkIfVegan(image)
});