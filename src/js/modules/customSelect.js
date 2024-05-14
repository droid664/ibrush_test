import Choices from 'choices.js'

export const customSelect = (HTMLSelectSelector, options) => {
    const $el = document.querySelector(HTMLSelectSelector)

    if (!$el) {
        console.error('customSelect: select element not found')
        return
    }

    new Choices($el, {
        searchEnabled: false,
        placeholder: true,
        placeholderValue: options.placeholderValue ?? '',
    })
}
