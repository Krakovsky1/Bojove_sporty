<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="close">
    <div class="modal">
      <header class="modal-header">

        <button class="close-btn" @click="close">×</button>
      </header>
      <div class="modal-content">
        <slot />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "InfoModal",
  props: {
    buttonText: {
      type: String,
      default: null,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close", "action"],
  methods: {
    close() {
      this.$emit("close");
    },
    action() {
      this.$emit("action");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: #fff;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.modal-icon {
  max-width: 50px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-content {
  margin: 20px 0;
  font-size: 1.1rem;
  color: #555;
}

.modal-footer {
  margin-top: 20px;
}

.action-button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.action-button:hover {
  background-color: #2980b9;
}
</style>
