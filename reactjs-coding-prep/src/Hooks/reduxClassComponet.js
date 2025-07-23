// What are mapStateToProps and mapDispatchToProps?

// They are functions you pass to the connect() HOC(higher order component) to connect a class component to redux store.

// what is mapStateToProps?
// A function that maps state from the Redux store to the props of your component.

const mapStateToProps = (state) => {
    return {
        count: state.count,
        theme: state.theme
    };
};

// So inside your class component, you can now access:
this.props.count
this.props.theme

// what is mapDispatchToProps?
// A function that maps dispatch functions (action creators) to your component’s props.

const mapDispatchToProps = (dispatch) =>{
    return  {
        increment:()=> dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' })
    }
}

// in component
this.props.increment();
this.props.decrement();


// connect() ---->	HOC to link class component with Redux



