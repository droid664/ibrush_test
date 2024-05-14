import { customSelect } from './modules/customSelect'
import Swiper from 'swiper'
import { Grid, Pagination } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
    customSelect('[data-form-select]', 'Выберите книгу')

    new Swiper('.similar-posts .swiper', {
        slidesPerView: 3,
        grid: {
            rows: 2,
        },
        pagination: {
            el: '.similar-posts .swiper-pagination',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: false,
                spaceBetween: 50,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
                grid: {
                    rows: 2,
                },
            },
        },
        modules: [Grid, Pagination],
    })
})
