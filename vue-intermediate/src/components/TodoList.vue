<template>
  <div>
    <ul>
      <li 
        v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item"
        class="shadow">
        <i 
         class="fas fa-check checkBtn"
         v-bind:class="{checkBtnCompleted: todoItem.completed}"
         v-on:click="toggleComplete(todoItem, index)"
        ></i>
         <span v-bind:class="{textCompleted: todoItem.completed}">
          {{todoItem.item}}
         </span>
        <span 
          class="removeBtn"
          v-on:click="removeTodo(todoItem, index)"
          >
          <i class="fas fa-trash"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      todoItems: []
    }
  },
  methods: {
    removeTodo: function(value, index) {
      console.log('removeItem', value, index);
      localStorage.removeItem(value);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function(todoItem, index) {
      todoItem.completed = !todoItem.completed;
      // 로컬스토리지 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
      console.log(index);
    }
  },
  created: function() {
    // 인스턴스 생성하자마자 호출됨.
    if(localStorage.length > 0){
      for (let i = 0; i < localStorage.length; i++ ){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          var value = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.todoItems.push(value);
        }
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: .5rem 0;
  padding: 0 .9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>