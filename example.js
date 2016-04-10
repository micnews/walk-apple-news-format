import walk from 'walk-apple-news-format';

const appleNewsFormat = {
  components: [{
    role: 'container',
    components: [{
      role: 'container',
      components: [{
        role: 'photo',
        URL: 'bundle://image-1'
      }]
    }]
  }]
};

// walk will call the callback once for all components, even nested
walk(appleNewsFormat, function (component) {
  console.log('component', component);
});
