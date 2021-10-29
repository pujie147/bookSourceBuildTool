window.addEventListener('message', function (event, a, b) {
    let result = event.data;
    console.log(result)
    if (result && (result.from === 'content-script') && (event.source === window.parent)) {
        console.log("11111")
    }
});
