const ACTIVE_CLASS = 'modal--active'

export const modal = () => {
    const $triggers = document.querySelectorAll('[data-modal-trigger]')
    const $closeTriggers = document.querySelectorAll('[data-modal-close]')

    const openModal = (modalName) => {
        const $modal = document.querySelector(`[data-modal="${modalName}"]`)

        if (!$modal) {
            console.error(`Modal "${modalName}" not found`)
            return
        }

        $modal.classList.add(ACTIVE_CLASS)
    }

    const closeModal = (target) => {
        const $modal = target.closest('.modal')

        if (!$modal) {
            console.error(`Modal not found`)
            return
        }

        $modal.classList.remove(ACTIVE_CLASS)
    }

    for (const $modal of document.querySelectorAll('.modal')) {
        $modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal__body')) {
                closeModal(e.target)
            }
        })
    }
    for (const $trigger of $triggers) {
        $trigger.addEventListener('click', (e) => {
            e.preventDefault()
            openModal($trigger.dataset.modalTrigger)
        })
    }
    for (const $closeTrigger of $closeTriggers) {
        $closeTrigger.addEventListener('click', (e) => {
            e.preventDefault()
            closeModal(e.target)
        })
    }
}
