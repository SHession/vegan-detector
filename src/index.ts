import { checkIfVegan } from "./vegan-checker";

const filePicker = (document.querySelector("#photo-picker") as HTMLInputElement);
const pic = (document.querySelector("#ingredients-photo") as HTMLImageElement);

filePicker.onchange =  () => {
    var fileList = filePicker.files;
    const image = window.URL.createObjectURL(fileList![0]);
    pic.src = image;
    checkIfVegan(image)
 }

let video = (document.getElementById('video') as HTMLVideoElement);
let canvas = (document.getElementById('canvas') as HTMLCanvasElement);

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment'} }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video!.srcObject = stream;
    });
}

document.getElementById("snap")!.addEventListener("click", function() {
    const context = canvas.getContext("2d")!;
	context.drawImage(video, 0, 0, 640, 480);
    const image = canvas.toDataURL();
    pic.src = image;
    checkIfVegan(image)
});