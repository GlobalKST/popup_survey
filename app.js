    // Get popUp element
    var popUp = document.getElementById('simpleModal');
   // Get open popUp element  
    var modalBtn = document.getElementById('modalBtn');
    // Get close popUp element  
    var close = document.getElementsByClassName('close')[0];
    
    // Listen for open click
    modalBtn.addEventListener('click', openModul);
    // Listen for close click
    close.addEventListener('click', closeModul);
    // Listen for outside click
    window.addEventListener('click', clickOutside);
    
    function openModul() {
        popUp.style.display = "block";
    }
    function closeModul() {
        popUp.style.display = "none";
    }
    function clickOutside(e) {
        if(e.target == popUp) {
            popUp.style.display = 'none';
        }
    }


