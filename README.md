# vue 공부하기

1. [Todo.vue](#1.Todo.vue)



### Todo.vue
localstorage를 이용하여 To do List 만들어 본 것입니다.

1. Todo.vue(상위 컴포넌트)안에 ToDoHeader.vue, ToDoInput.vue, ToDoList.vue (하위 컴포넌트)가 있습니다.
2. todoItems라는 배열이 있으며 input 박스에서 전달 받은 데이터들이 저장되는 공간이다.
3. ToDoHeader 컴포넌트에 msg라는 prop을 전달한다.
4. ToDoInput 컴포넌트에서 addTodo라는 click 이벤트가 발생하면 해당 데이터들이 상위 컴포넌트로 전달된다.<br>
4.1. addTodo 메소드는 localstorage에 저장되는 동시에 todoItems에 저장된다.
5. ToDoList 컴포넌트는 todoItems의 데이터들을 바인딩하여 화면에 뿌려준다.

<<ToDoHeader.vue>>
- title이 나타나는 곳

1. 상위 컴포넌트에서 부터 전달 받은 prop을 화면에 출력한다.

<<ToDoInput.vue>>
- text를 input박스에 입력

1. input박스에 text를 입력하면 v-model을 통해 데이터 속성이 newTodoItem에 저장된다.
2. 추가라는 버튼을 누르거나 enter키를 누르게 되면 addTodo라는 메소드가 실행된다.<br>
2.1. 이벤트가 발생하면 데이터가 저장되어 있는 newTodoItem를 상위 컴포넌트로 emit한다.<br>
2.2. 그 다음 clearBox라는 메소드 실행.
3. clearBox가 실행되면 input박스에 있는 텍스트가 초기화된다.

<<ToDoList.vue>>
- 해야할 일들(데이터)을 화면에 출력

1. todoItems에 담겨져 있는 데이터(propsdata)들을 v-for를 이용하여 화면에 하나씩 나타낸다.
2. x 버튼을 누르게 되면 removeTodo라는 메소드가 실행된다.<br>
2.1. removeTodo가 실행되면 localstorage에 저장되어 있는 데이터들이 삭제된다. <br>
2.2. 그리고 전체 todoItems에서도 해당 index에 대해 삭제되며 이 데이터들을 기반으로 화면에서 삭제, 추가가 나타난다. 




### Todo2.vue
JSON파일을 이용하여 To do List 만들어 본 것입니다.

1. Todo.vue(상위 컴포넌트)안에 TodoHeader.vue, TodoInput2.vue, TodoList2.vue, ModalView.vue (하위 컴포넌트)가 있습니다.


<<TodoHeader.vue>>
- title이 나타나는 곳

1. 상위 컴포넌트에서 부터 전달 받은 prop을 화면에 출력한다.


<<TodoInput2.vue>>
- text를 input박스에 입력

1. input박스에 text를 입력하면 v-model을 통해 데이터 속성이 newTodoItem에 저장된다.
2. 추가라는 버튼을 누르거나 enter키를 누르게 되면 addTodo라는 메소드가 실행된다.<br>
2.1. 이벤트가 발생하면 데이터가 저장되어 있는 newTodoItem를 상위 컴포넌트로 emit한다.<br>
2.2. 그 다음 clearBox라는 메소드 실행.
3. clearBox가 실행되면 input박스에 있는 텍스트가 초기화된다.

<<TodoList2.vue>>
- 해야할 일들(데이터)을 화면에 출력

1. todoItems에 담겨져 있는 데이터(propsdata)들을 v-for를 이용하여 화면에 하나씩 나타낸다.
2. x 버튼을 누르게 되면 removeTodo라는 메소드가 실행된다.<br>
2.1. removeTodo가 실행되면 localstorage에 저장되어 있는 데이터들이 삭제된다. <br>
2.2. 그리고 전체 todoItems에서도 해당 index에 대해 삭제되며 이 데이터들을 기반으로 화면에서 삭제, 추가가 나타난다. 

<<ModalView.vue>>





### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
