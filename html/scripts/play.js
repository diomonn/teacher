(function() {
    const Play = document.querySelector('.music')
    const Playemd = document.querySelector('audio');

    class Pla {
        a;
        constructor(i) {
            this.a = i
        };
        PlayN() {
            console.log(this.a);
            if (this.a === 'pause 🎵') {
                Playemd.pause()

                this.a = 'play 🎵'
                Play.innerHTML = this.a
            } else {
                Playemd.play()
                this.a = 'pause 🎵'
                Play.innerHTML = this.a
            }
        }

    }

    const f = new Pla(Play.innerHTML);
    console.log(f);
    f.PlayN()
    Play.onclick = function() {
        f.PlayN();
    }

})()