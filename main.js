// Function to generate the list of surahs
function generateSurahList() {
  var surahList = document.getElementById("surahList");
  for (var i = 1; i <= 114; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = "Surah " + i;
    listItem.addEventListener("click", function () {
      // Get the surah number from the clicked list item
      var surahNumber = parseInt(this.textContent.split(" ")[1]);
      // Update the audio player source with the API URL
      var audioPlayer = document.getElementById("audioPlayer");
      audioPlayer.src =
        "https://cdn.islamic.network/quran/audio-surah/128/ar.abdulazizazzahrani/" +
        surahNumber +
        ".mp3";
    });
    surahList.appendChild(listItem);
  }
}

// Call the function to generate the surah list on page load
window.onload = function () {
  generateSurahList();
};
