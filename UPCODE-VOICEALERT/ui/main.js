$(function () {
    var uiVisible = false;  

    window.addEventListener('message', (event) => {
        var item = event.data;
        uiContainer = document.getElementById('micmute');
        micmuteItem = document.querySelector('.micmute-item');
        topElement = document.getElementById('top');

        if (item.status == true) {
            topElement.classList.remove('active');
            $(".disabled").text("DISABLED!");
            $(".go-to-settings-container").show();
            micmuteItem.classList.remove('active');
            uiContainer.style.display = 'block';
            
            if (!uiVisible) {
                uiContainer.classList.add('slide-right');
                uiVisible = true;
            }

        } else {
            $(".disabled").text("ENABLED!");
            topElement.classList.add('active');
            micmuteItem.classList.add('active');
            $(".go-to-settings-container").hide();


            if (uiVisible) {
                setTimeout(() => {
                    uiContainer.classList.add('slide-left');
                    off();
                }, 1000);  
            }
        }
    });

    function off() {
        setTimeout(() => {
            uiContainer.style.display = 'none';
            uiContainer.classList.remove('slide-left');
            uiVisible = false;
        }, 500);
    }
});
