chrome.tabs.executeScript({
    code: `
    let script = document.createElement('script');
    script.innerHTML = \`
        document.addEventListener('keydown', k => {
            realWPM = Math.round((error_keystrokes / 5) / ((60.01 - countdown) / 60));
            
            if(realWPM < 0 || realWPM > 400) {
                realWPM = 0;
            }

            $('#preview').html(\"<font size='+3'><b>WPM:</b> \" + realWPM + \"</<font size='+3'>\");       
            
            $('#words').before(\"<div id='preview' style='text-align: center'></div>\");        
        });
    \`;
    document.documentElement.appendChild(script);
    `
});