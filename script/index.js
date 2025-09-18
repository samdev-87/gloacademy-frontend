const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay');
    const cartBtn = document.querySelector('#cart-button');

    const openModal = () => {
        modal.classList.add('open');
    }

    const closeModal = () => {
        modal.classList.remove('open');
    }

    cartBtn.addEventListener('click', () => {
        openModal();
    });

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('cart-modal__overlay')
            || e.target.closest('.cart-modal__header--close')) {
            closeModal();
        };
    });
}

const restsFunc = () => {
    const container = document.querySelector('#rests-container');

    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: './images/rests/rest-1.jpg',
        }
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Loading...</p>'
    }

    const renderRests = (array) => {
        container.innerHTML = '';
        array.forEach((rest) => {
            container.insertAdjacentHTML('beforeend', `
            <a href="./goods.html?id=${rest.id}" class="products-card">
                <div class="products-card__image">
                    <img src="${rest.image}" alt="${rest.title}">
                </div>
                <div class="products-card__description">
                    <div class="products-card__description-row">
                    <h4 class="products-card__description--title">${rest.title}</h4>
                    <div class="products-card__description--badge">${rest.time} мин</div>
                    </div>
                    <div class="products-card__description-row">
                    <div class="products-card__description-info">
                        <div class="products-card__description-info--rating">
                        <img src="./images/icons/star.svg" alt="star"> ${rest.rating}
                        </div>
                        <div class="products-card__description-info--price">от ${rest.price} Р</div>
                        <div class="products-card__description-info--group">${rest.type}</div>
                    </div>
                    </div>
                </div>
            </a>`);
        })
    }

    if (container) {
        loading();

        setTimeout(() => {
            renderRests(restArray);
        }, 2000);
    }
}

modalFunc();
restsFunc();