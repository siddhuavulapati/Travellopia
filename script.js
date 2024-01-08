function toggleContent() {
    var moreContainer = document.getElementById('moreContainer');
    moreContainer.classList.toggle('expanded');

    var readMoreBtn = document.getElementById('readMoreBtn');
    var moreContent = document.getElementById('moreContent');

    if (moreContainer.classList.contains('expanded')) {
        moreContent.style.maxHeight = moreContent.scrollHeight + "px";
        readMoreBtn.textContent = "Read less";
    } else {
        moreContent.style.maxHeight = "150px";
        readMoreBtn.textContent = "Read more";
    }
}