document.getElementById("convertButton").addEventListener("click", () => {
  let videoInput = document.getElementById("videoInput");
  if (videoInput.files.length > 0) {
    let videoFile = videoInput.files[0];
    createVideoLink(videoFile);
  } else {
    alert("Please select a video file.");
  }
});

function createVideoLink(videoFile) {
  let linkOutput = document.getElementById("linkOutput");
  linkOutput.innerHTML = ""; // Clear any previous output

  let videoURL = URL.createObjectURL(videoFile);
  let link = document.createElement("a");
  link.href = videoURL;
  link.target = "_blank"; // Open in a new tab
  link.textContent = "Watch Video";

  linkOutput.appendChild(link);
}
