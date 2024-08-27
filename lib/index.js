import './style.css';

export default {
    install(app) {
        const init = (el, binding) => {
            let _type = 'primary';
            let classes = 'v-clickable';
            if (binding.value) {
                const { type, button, link } = binding.value
                _type = type;
                if (button === true) {
                    classes += ' v-clickable--button';
                } else if (link === true) {
                    classes += ' v-clickable--link';
                }
            }
            classes += ` v-clickable--${_type}`;
            el.setAttribute('class', classes);
        };
        app.directive('clickable', {
            bind(el, binding) {
                init(el, binding);
            },
            beforeMount(el, binding) {
                init(el, binding);
            }
        })
    }
}