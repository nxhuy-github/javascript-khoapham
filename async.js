function a() {

    setTimeout(() => {
        try {
            console.log(b + 1), 1000
        } catch (e) {
            console.log('Loi');
        }
    });

}

a();