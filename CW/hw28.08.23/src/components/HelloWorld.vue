<template>
  <div>
    <button @click="addBlock">Добавить блок</button>
    <div v-for="(block, index) in blocks" :key="index" :style="getBlockStyles(block)">
      <textarea v-model="block.text" @input="handleTextareaInput(block)"></textarea>
      <input v-model="block.color" type="color">
      <input v-model="block.backgroundColor" type="color">
      <select v-model="block.fontFamily">
        <option value="Arial">Arial</option>
        <option value="Verdana">Verdana</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>
      <input v-model="block.fontSize" type="number">
      <select v-model="block.fontStyle">
        <option value="normal">Normal</option>
        <option value="italic">Italic</option>
        <option value="oblique">Oblique</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blocks: [],
    };
  },
  
  methods: {
    addBlock() {
      this.blocks.push({
        text: '',
        textColor: '#000000',
        backgroundColor: '#ffffff',
        fontFamily: 'Arial',
        fontSize: 12,
        fontStyle: 'normal',
      });
    },
    getBlockStyles(block) {
      return {
        textColor: block.color,
        background: block.backgroundColor,
        fontFamily: block.fontFamily,
        fontSize: `${block.fontSize}px`,
        fontStyle: block.fontStyle,
        whiteSpace: 'pre-wrap',
      };
    },
    handleTextareaInput(block) {
      block.text = block.text.replace(/\r\n|\r|\n/g, '\n');
    },
  },
};
</script>