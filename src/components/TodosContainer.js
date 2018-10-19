
export default class TodosContainer extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Header />
          <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
          <ScrollView>
            <ReactiveList
              componentId="ReactiveList"
              defaultQuery={() => ({
                query: {
                  match_all: {},
                },
              })}
              stream
              onAllData={this.onAllData}
              dataField="title"
              showResultStats={false}
              pagination={false}
            />
            ...
          </ScrollView>
          <AddTodoButton onPress={() => this.setState({ addingTodo: true })} />
        </View>
      );
    }
  }