# React-Native-Sample
A simple project using JS components and React Native.

![Alt text](https://i.imgur.com/gB0qiy3.png "Optional title")

Display a list of elements. Each element can be detalailed by clicking on it and the list implements pagination.

```javascript

  render(){
        return(
            <View style={styles.container}>
               <FlatList
               contentContainerStyle={styles.list}
                data={this.state.docs}
                keyExtractor={item => item._id}
                renderItem={this.renderItem}
                onEndReached={this.loadMore}
                onEndReachedThreshold={0.1}
               />
            </View>

        );
    }
```
