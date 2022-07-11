function Root() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={home} />
        <Drawer.Screen name="homepages" component={homepages} />
        <Stack.Screen name="settingpages" component={settingpages} />
      </Drawer.Navigator>
    );
  }
  
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Feed" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }