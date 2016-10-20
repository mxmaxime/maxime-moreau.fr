export default class AnimateForm {

    constructor (options) {
        this.options = options
        this.fields = document.querySelectorAll(options.inputSelector)
        if (this.fields.length === 0) {
            console.error(`[FORM] L'élement '${options.inputSelector}' est introuvable dans le DOM`)
        }
        this.animate()
    }

    animate () {
        const self = this
		this.fields.forEach(field => {
            field.addEventListener('focus', function () {
                this.parentNode.classList.add(self.options.focusedClass, self.options.labeledClass) // has-label = show the label on top of the input
            })

            field.addEventListener('blur', function () {
                let label = this.parentNode
                if (this.value === '') {
                    label.classList.remove(self.options.labeledClass)
                }
                label.classList.remove(self.options.focusedClass)
            })
        })
    }
}