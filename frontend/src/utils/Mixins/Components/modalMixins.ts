export default {
  model: {
    prop: 'modal',
    event: 'closeModal',
  },
  props: {
    modal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    modalFlag: {
      get():Boolean {
        return this.modal;
      },
      set(e: Boolean) {
        this.$emit('closeModal', e);
      },
    },
  },
};
