
AFRAME.registerComponent('color-changer', {

    init: function () {

        const colors = [
            '#EF2D5E',
            '#FFC65D',
            '#4CC3D9',
            '#7BC8A4',
            '#9B59B6'
        ];

        let index = 0;

        this.el.addEventListener('click', function () {

            index = (index + 1) % colors.length;

            this.setAttribute('color', colors[index]);

        });

    }

});


AFRAME.registerComponent('grow-toggle', {

    schema: {
        target: { type: 'selector' },
        big: { type: 'number', default: 1.8 }
    },

    init: function () {

        let open = false;

        this.el.addEventListener('click', () => {

            open = !open;

            let size = open ? this.data.big : 1;

            this.el.setAttribute(
                'scale',
                size + ' ' + size + ' ' + size
            );

            if (this.data.target) {
                this.data.target.setAttribute('visible', open);
            }

        });

    }

});



AFRAME.registerComponent('marker-status', {

    init: function () {

        const banner = document.querySelector('#status');

        this.el.addEventListener('markerFound', function () {

            banner.textContent =
                'Marker FOUND - Tap the ball and green cube!';

            banner.style.background = '#2E7D32';

        });

        this.el.addEventListener('markerLost', function () {

            banner.textContent =
                'Marker LOST - Point camera at Hiro marker';

            banner.style.background = '#C62828';

        });

    }

});

