class TodoItem extends Component {
    onTodoItemToggle = (todo, propAction) => {
      propAction({
        ...todo,
        completed: !todo.completed,
      });
    };

    render() {
      const { todo, onUpdate, onDelete } = this.props;

      return (
        <View style={styles.row}>
          <View
            style={{
              flex: 1,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingRight: 10,
              paddingVertical: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => this.onTodoItemToggle(todo, onUpdate)}
              style={{
                flex: 1,
                width: '100%',
                flexDirection: 'row',
              }}
            >
              <CheckBox
                checked={todo.completed}
                onPress={() => this.onTodoItemToggle(todo, onUpdate)}
              />
              <Body
                style={{
                  flex: 1,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  paddingLeft: 25,
                }}
              >
                <Text
                  style={{
                    color: todo.completed ? 'grey' : 'black',
                    textDecorationLine: todo.completed ? 'line-through' : 'none',
                  }}
                >
                  {todo.title}
                </Text>
              </Body>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onDelete(todo)}
              style={{ paddingLeft: 25, paddingRight: 15 }}
            >
              <Ionicons
                name="ios-trash-outline"
                color={`${todo.title.length > 0 ? 'black' : 'grey'}`}
                size={23}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
}
