// Interactive dynamic lighting & spotlight effects
(function () {
    var r = document.documentElement;
    addEventListener('pointermove', function (e) {
        r.style.setProperty('--mx', e.clientX + 'px');
        r.style.setProperty('--my', e.clientY + 'px');
    }, { passive: true });

    document.querySelectorAll('.proj').forEach(function (p) {
        p.addEventListener('pointermove', function (e) {
            var b = p.getBoundingClientRect();
            p.style.setProperty('--px', (e.clientX - b.left) + 'px');
            p.style.setProperty('--py', (e.clientY - b.top) + 'px');
        });
    });
})();

// Active navigation highlight on scroll
(function () {
    var links = [].slice.call(document.querySelectorAll('nav ul a'));
    var secs = links.map(function (a) {
        return document.querySelector(a.getAttribute('href'));
    });

    function upd() {
        var y = scrollY + 120, cur = -1;
        secs.forEach(function (s, i) {
            if (s && s.offsetTop <= y) cur = i;
        });
        if (innerHeight + scrollY >= document.body.scrollHeight - 4) {
            cur = secs.length - 1;
        }
        links.forEach(function (a, i) {
            a.classList.toggle('on', i === cur);
        });
    }

    addEventListener('scroll', upd, { passive: true });
    upd();
})();
