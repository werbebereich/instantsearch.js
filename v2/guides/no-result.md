<!DOCTYPE html><html><head><base href="/"><meta content="IE=edge" http-equiv="X-UA-Compatible"><meta charset="utf-8"><meta content="width=device-width, initial-scale=1" name="viewport"><link rel="icon" type="image/png" href="assets/img/favicon.png"><meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"><meta content="InstantSearch.js - InstantSearch.js makes it easy to design the perfect search experience 🔍" name="description"><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport"><!-- / Twitter card--><meta content="summary_large_image" name="twitter:card"><meta content="https://community.algolia.com/instantsearch.js/v2/" name="twitter:site"><meta content="Algolia" name="twitter:creator"><meta content="InstantSearch.js" name="twitter:title"><meta content="InstantSearch.js makes it easy to design the perfect search experience 🔍" name="twitter:description"><meta content="https://community.algolia.com/instantsearch.js/v2/assets/img/og-instantsearch.png" name="twitter:image"><!-- / OG meta--><meta content="https://community.algolia.com/instantsearch.js/v2/" property="og:url"><meta content="InstantSearch.js" property="og:title"><meta content="https://community.algolia.com/instantsearch.js/v2/assets/img/og-instantsearch.png" property="og:image"><meta content="website" property="og:type"><meta content="Widgets and helpers to build instant search applications on the web" property="og:description"><meta content="InstantSearch.js" property="og:site_name"><title>InstantSearch.js | Designing the no-result page</title><link rel="stylesheet" href="stylesheets/style.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css"></head></html><body class="documentation"><div><!-- Start community header -->
    <nav class='algc-navigation'>
      <div class='algc-navigation__container'>
        <div class='algc-mainmenu'>
          <ul class='algc-navigation__brands'>
            <li class='algc-navigation__li algc-navigation__li--algolia'>
              <a href='https://www.algolia.com/'>
                <svg class="algolia-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 387 96"><title>logo/algolia/master</title><defs><linearGradient x1="-37.75%" y1="134.936%" x2="130.239%" y2="-27.7%" id="a"><stop stop-color="#00AEFF" offset="0%"/><stop stop-color="#3369E7" offset="100%"/></linearGradient></defs><g fill="none"><path d="M12.614 0h70.571c6.947 0 12.614 5.637 12.614 12.611V83.19c0 6.945-5.639 12.611-12.614 12.611H12.614C5.667 95.801 0 90.164 0 83.19V12.582C0 5.637 5.639 0 12.614 0z" fill="url(#a)"/><path d="M49.202 24.321c-14.964 0-27.105 12.117-27.105 27.081 0 14.964 12.14 27.052 27.105 27.052 14.964 0 27.105-12.117 27.105-27.081 0-14.964-12.111-27.052-27.105-27.052zm0 46.142c-10.539 0-19.098-8.543-19.098-19.061 0-10.519 8.559-19.061 19.098-19.061S68.3 40.884 68.3 51.402c0 10.519-8.53 19.061-19.098 19.061zm0-34.229v14.209c0 .407.437.697.815.494l12.635-6.538c.291-.145.378-.494.233-.785a15.728 15.728 0 0 0-13.101-7.933c-.291 0-.582.232-.582.552zM31.501 25.803l-1.659-1.656a4.153 4.153 0 0 0-5.881 0l-1.98 1.976a4.133 4.133 0 0 0 0 5.869l1.63 1.627c.262.262.64.203.873-.058a32.015 32.015 0 0 1 3.173-3.719 29.932 29.932 0 0 1 3.756-3.196c.291-.174.32-.581.087-.843zm26.581-4.3V18.22a4.158 4.158 0 0 0-4.163-4.155h-9.695c-2.3 0-4.163 1.86-4.163 4.155v3.371c0 .378.349.639.728.552a30.381 30.381 0 0 1 8.443-1.191c2.766 0 5.502.378 8.152 1.104a.564.564 0 0 0 .699-.552z" fill="#fff"/><path d="M240.04 73.397c0 7.758-1.98 13.424-5.968 17.027-3.989 3.603-10.073 5.405-18.283 5.405-2.999 0-9.229-.581-14.207-1.685l1.834-9.008c4.163.872 9.666 1.104 12.548 1.104 4.571 0 7.832-.93 9.782-2.789 1.951-1.86 2.911-4.62 2.911-8.281v-1.86c-1.135.552-2.62 1.104-4.454 1.685-1.834.552-3.959.843-6.347.843-3.144 0-5.997-.494-8.588-1.482-2.591-.988-4.833-2.441-6.667-4.359-1.834-1.918-3.29-4.329-4.309-7.206-1.019-2.877-1.543-8.02-1.543-11.797 0-3.545.553-7.991 1.63-10.954 1.106-2.964 2.678-5.521 4.804-7.642 2.096-2.121 4.658-3.748 7.657-4.94 2.999-1.191 6.521-1.947 10.335-1.947 3.697 0 7.104.465 10.423 1.017 3.319.552 6.143 1.133 8.443 1.772v45.096zm-31.646-22.432c0 4.765 1.048 10.054 3.144 12.262s4.804 3.312 8.123 3.312a17.37 17.37 0 0 0 5.124-.755c1.601-.494 2.882-1.075 3.901-1.772V35.798c-.815-.174-4.221-.872-7.511-.959-4.134-.116-7.278 1.569-9.491 4.271-2.184 2.702-3.29 7.439-3.29 11.855zm85.681 0c0 3.835-.553 6.741-1.689 9.908-1.135 3.167-2.737 5.869-4.804 8.107-2.067 2.237-4.542 3.981-7.453 5.201-2.911 1.22-7.395 1.918-9.637 1.918-2.242-.029-6.696-.668-9.578-1.918-2.882-1.249-5.357-2.964-7.424-5.201-2.067-2.237-3.668-4.94-4.833-8.107-1.165-3.167-1.747-6.073-1.747-9.908 0-3.835.524-7.526 1.689-10.664s2.795-5.811 4.891-8.049c2.096-2.237 4.6-3.952 7.453-5.172 2.882-1.22 6.056-1.802 9.491-1.802 3.435 0 6.609.61 9.52 1.802 2.911 1.22 5.415 2.935 7.453 5.172 2.067 2.237 3.668 4.911 4.833 8.049 1.223 3.138 1.834 6.828 1.834 10.664zm-11.645.029c0-4.911-1.077-9.008-3.173-11.855-2.096-2.877-5.037-4.3-8.792-4.3-3.756 0-6.696 1.424-8.792 4.3-2.096 2.877-3.115 6.945-3.115 11.855 0 4.969 1.048 8.31 3.144 11.187 2.096 2.906 5.037 4.329 8.792 4.329 3.756 0 6.696-1.453 8.792-4.329 2.096-2.906 3.144-6.218 3.144-11.187zm37.003 25.105c-18.662.087-18.662-15.051-18.662-17.463l-.029-53.697 11.383-1.802v53.348c0 1.366 0 10.025 7.307 10.054v9.56zm20.059 0H328.05V27.051l11.442-1.802v50.849zm-5.735-56.225c3.814 0 6.929-3.08 6.929-6.886s-3.086-6.886-6.929-6.886c-3.843 0-6.929 3.08-6.929 6.886s3.115 6.886 6.929 6.886zm34.179 5.405c3.756 0 6.929.465 9.491 1.395 2.562.93 4.629 2.237 6.143 3.894 1.514 1.656 2.591 3.923 3.232 6.305.67 2.383.99 4.998.99 7.874v29.231c-1.747.378-4.396.814-7.948 1.337-3.552.523-7.54.785-11.966.785-2.94 0-5.648-.291-8.064-.843-2.446-.552-4.513-1.453-6.259-2.702-1.718-1.249-3.057-2.848-4.047-4.823-.961-1.976-1.456-4.765-1.456-7.671 0-2.789.553-4.562 1.63-6.48a13.789 13.789 0 0 1 4.454-4.707c1.892-1.22 4.047-2.092 6.521-2.615a37.437 37.437 0 0 1 7.744-.785c1.252 0 2.562.087 3.959.232 1.397.145 2.853.407 4.425.785v-1.86c0-1.308-.146-2.557-.466-3.719a7.97 7.97 0 0 0-1.63-3.109c-.786-.901-1.805-1.598-3.086-2.092s-2.911-.872-4.862-.872c-2.62 0-5.008.32-7.191.697-2.184.378-3.989.814-5.357 1.308l-1.368-9.327c1.427-.494 3.552-.988 6.288-1.482 2.737-.494 5.677-.755 8.821-.755zm.961 41.232c3.494 0 6.085-.203 7.89-.552V54.394a23.243 23.243 0 0 0-2.737-.552 27.24 27.24 0 0 0-3.959-.291c-1.252 0-2.533.087-3.814.291-1.281.174-2.446.523-3.464 1.017-1.019.494-1.863 1.191-2.475 2.092-.64.901-.932 1.424-.932 2.789 0 2.673.932 4.213 2.62 5.23 1.718 1.046 3.989 1.54 6.871 1.54zM144.083 25.57c3.756 0 6.929.465 9.491 1.395 2.562.93 4.629 2.237 6.143 3.894 1.543 1.685 2.591 3.923 3.232 6.305.67 2.383.99 4.998.99 7.874v29.231c-1.747.378-4.396.814-7.948 1.337-3.552.523-7.54.785-11.966.785-2.94 0-5.648-.291-8.064-.843-2.446-.552-4.513-1.453-6.259-2.702-1.718-1.249-3.057-2.848-4.047-4.823-.961-1.976-1.456-4.765-1.456-7.671 0-2.789.553-4.562 1.63-6.48a13.789 13.789 0 0 1 4.454-4.707c1.892-1.22 4.047-2.092 6.521-2.615a37.437 37.437 0 0 1 7.744-.785c1.252 0 2.562.087 3.959.232 1.368.145 2.853.407 4.425.785v-1.86c0-1.308-.146-2.557-.466-3.719a7.97 7.97 0 0 0-1.63-3.109c-.786-.901-1.805-1.598-3.086-2.092s-2.911-.872-4.862-.872c-2.62 0-5.008.32-7.191.697-2.184.378-3.989.814-5.357 1.308l-1.368-9.327c1.427-.494 3.552-.988 6.288-1.482 2.737-.523 5.677-.755 8.821-.755zm.99 41.261c3.494 0 6.085-.203 7.89-.552V54.714a23.243 23.243 0 0 0-2.737-.552 27.24 27.24 0 0 0-3.959-.291c-1.252 0-2.533.087-3.814.291-1.281.174-2.446.523-3.464 1.017-1.019.494-1.863 1.191-2.475 2.092-.64.901-.932 1.424-.932 2.789 0 2.673.932 4.213 2.62 5.23 1.689 1.017 3.989 1.54 6.871 1.54zm46.145 9.269c-18.662.087-18.662-15.051-18.662-17.463l-.029-53.697 11.383-1.802v53.348c0 1.366 0 10.025 7.307 10.054v9.56z" fill="#182359"/></g></svg>
              </a>
            </li>
            <li class='algc-navigation__li algc-navigation__li--community'>
              <a href='https://community.algolia.com/' data-enabledropdown="true" data-dropdown="integrations">
                <svg class="algc-arrowseparator" viewBox="0 0 18 35" xmlns="http://www.w3.org/2000/svg"><g id="Symbols" fill="none" fill-rule="evenodd"><g id="community/header" fill="#3369E6"><g id="Group-13"><g id="Group-2"><path id="Combined-Shape-Copy" d="M1.8537 34.7643l15.5597-17.268L1.8537 0H0l15.5597 17.4964L0 34.7644z"/></g></g></g></g></svg>
                <svg class="algolia-community-logo" width="145" height="37" viewBox="0 0 145 37" xmlns="http://www.w3.org/2000/svg"><title>logo/algolia-community/short</title><g fill="none"><path fill="#16205A" d="M18.36.104l18.403 18.429-18.318 18.345L.042 18.449z"/><path fill="#46AEDA" d="M15.503 5.268l2.862-2.866 3.45 3.456-1.145 1.147-2.3-2.304-1.717 1.72z"/><path fill="#FE336F" d="M21.302 31.712l-2.862 2.866-9.776-9.791 1.145-1.147 8.626 8.639 1.717-1.72z"/><path fill="#F5A623" d="M22.447 30.566l12.021-12.038L22.966 7.01l-1.145 1.147 10.352 10.366-10.876 10.892z"/><path fill="#50E3C2" d="M7.489 13.294l-5.152 5.159 5.176 5.183 1.145-1.146-4.025-4.031 4.007-4.013z"/><path fill="#BD0FE1" d="M8.634 12.147l5.724-5.733 1.15 1.152-5.724 5.733z"/><path d="M18.538 13.796c-3.069 0-5.558 2.477-5.558 5.536 0 3.059 2.49 5.53 5.558 5.53 3.069 0 5.558-2.477 5.558-5.536 0-3.059-2.483-5.53-5.558-5.53zm0 9.432c-2.161 0-3.916-1.746-3.916-3.896s1.755-3.897 3.916-3.897 3.916 1.746 3.916 3.896-1.749 3.896-3.916 3.896zm0-6.997v2.904c0 .083.09.143.167.101l2.591-1.336c.06-.03.077-.101.048-.16a3.226 3.226 0 0 0-2.686-1.621c-.06 0-.119.048-.119.113zm-3.63-2.132l-.34-.339a.853.853 0 0 0-1.206 0l-.406.404a.844.844 0 0 0 0 1.2l.334.332c.054.054.131.042.179-.012.197-.27.415-.524.651-.76a6.07 6.07 0 0 1 .77-.653c.06-.036.066-.119.018-.172zm5.451-.879v-.671a.851.851 0 0 0-.854-.849h-1.988a.851.851 0 0 0-.854.849v.689c0 .078.072.131.149.113a6.318 6.318 0 0 1 3.403-.017l.099-.021.044-.092z" fill="#fff"/><path d="M43.436 18.501a6.4 6.4 0 0 1 .357-2.158 5.1 5.1 0 0 1 1.023-1.74 4.69 4.69 0 0 1 1.619-1.154c.636-.278 1.351-.418 2.145-.418.98 0 1.907.179 2.781.537l-.516 1.969a5.422 5.422 0 0 0-.943-.298 5.04 5.04 0 0 0-1.122-.119c-.94 0-1.655.295-2.145.885-.49.59-.735 1.422-.735 2.496 0 1.034.232 1.853.695 2.456.463.603 1.245.905 2.344.905.41 0 .814-.04 1.212-.119.397-.08.741-.179 1.033-.298l.338 1.989c-.265.133-.665.252-1.202.358a8.546 8.546 0 0 1-1.658.159c-.887 0-1.658-.136-2.314-.408a4.403 4.403 0 0 1-1.629-1.134 4.71 4.71 0 0 1-.963-1.73 7.184 7.184 0 0 1-.318-2.178zm19.126-.02c0 .822-.119 1.571-.357 2.247a4.968 4.968 0 0 1-1.013 1.73 4.555 4.555 0 0 1-1.579 1.114 5.097 5.097 0 0 1-2.036.398 5.027 5.027 0 0 1-2.026-.398 4.568 4.568 0 0 1-1.569-1.114 5.098 5.098 0 0 1-1.023-1.73c-.245-.676-.367-1.425-.367-2.247 0-.822.123-1.568.367-2.238a5.018 5.018 0 0 1 1.033-1.72 4.58 4.58 0 0 1 1.579-1.104 5.075 5.075 0 0 1 2.006-.388c.728 0 1.4.129 2.016.388a4.452 4.452 0 0 1 1.579 1.104 5.119 5.119 0 0 1 1.023 1.72c.245.67.367 1.416.367 2.238zm-2.463 0c0-1.034-.222-1.853-.665-2.456-.444-.603-1.063-.905-1.857-.905s-1.414.302-1.857.905c-.444.603-.665 1.422-.665 2.456 0 1.048.222 1.876.665 2.486.444.61 1.063.915 1.857.915s1.414-.305 1.857-.915c.444-.61.665-1.439.665-2.486zm10.864-.259c0-1.087-.136-1.873-.407-2.357-.272-.484-.778-.726-1.519-.726-.265 0-.556.02-.874.06l-.715.099v8.393h-2.403V13.627c.463-.133 1.069-.259 1.817-.378s1.539-.179 2.373-.179c.715 0 1.301.093 1.758.278.457.186.838.431 1.142.736.146-.106.331-.219.556-.338.225-.119.477-.229.755-.328.289-.102.584-.186.884-.249.311-.066.626-.099.943-.099.808 0 1.473.116 1.996.348.523.232.933.557 1.231.975.298.418.503.921.616 1.512.112.59.169 1.237.169 1.939v5.847h-2.403v-5.47c0-1.087-.132-1.873-.397-2.357-.265-.484-.775-.726-1.529-.726a3.15 3.15 0 0 0-1.092.189c-.344.126-.602.249-.775.368.106.332.179.683.218 1.054.04.371.06.769.06 1.193v5.748h-2.403v-5.47zm17.18 0c0-1.087-.136-1.873-.407-2.357-.272-.484-.778-.726-1.519-.726-.265 0-.556.02-.874.06l-.715.099v8.393h-2.403V13.627c.463-.133 1.069-.259 1.817-.378s1.539-.179 2.373-.179c.715 0 1.301.093 1.758.278.457.186.838.431 1.142.736.146-.106.331-.219.556-.338.225-.119.477-.229.755-.328.289-.102.584-.186.884-.249.311-.066.626-.099.943-.099.808 0 1.473.116 1.996.348.523.232.933.557 1.231.975.298.418.503.921.616 1.512.112.59.169 1.237.169 1.939v5.847h-2.403v-5.47c0-1.087-.132-1.873-.397-2.357-.265-.484-.775-.726-1.529-.726a3.15 3.15 0 0 0-1.092.189c-.344.126-.602.249-.775.368.106.332.179.683.218 1.054.04.371.06.769.06 1.193v5.748h-2.403v-5.47zm19.781 5.151c-.463.119-1.066.242-1.807.368a14.62 14.62 0 0 1-2.443.189c-.834 0-1.533-.119-2.095-.358-.563-.239-1.013-.57-1.351-.994a3.914 3.914 0 0 1-.725-1.522 8.071 8.071 0 0 1-.218-1.939v-5.828h2.403v5.45c0 1.114.162 1.909.487 2.387.324.477.89.716 1.698.716.291 0 .599-.013.924-.04.324-.026.566-.06.725-.099V13.29h2.403v10.084zm3.059-9.746a15.907 15.907 0 0 1 1.807-.378 15.604 15.604 0 0 1 2.463-.179c.847 0 1.556.116 2.125.348.57.232 1.023.557 1.36.975.338.418.576.921.715 1.512.139.59.209 1.237.209 1.939v5.847h-2.403v-5.47c0-.557-.037-1.031-.109-1.422-.073-.391-.192-.709-.357-.955a1.431 1.431 0 0 0-.675-.537c-.285-.113-.632-.169-1.043-.169-.304 0-.622.02-.953.06l-.735.099v8.393h-2.403V13.626zm14.042 10.064h-2.403V13.289h2.403v10.402zm.258-13.445c0 .451-.146.809-.437 1.074a1.485 1.485 0 0 1-1.033.398c-.41 0-.761-.133-1.053-.398-.291-.265-.437-.623-.437-1.074 0-.464.146-.829.437-1.094a1.51 1.51 0 0 1 1.053-.398c.397 0 .741.133 1.033.398.291.265.437.63.437 1.094zm2.681.298l2.403-.398v3.143h3.694v2.009h-3.694v4.236c0 .835.132 1.432.397 1.79.265.358.715.537 1.351.537.437 0 .824-.046 1.162-.139.338-.093.606-.179.804-.259l.397 1.909a9.068 9.068 0 0 1-1.092.368c-.45.126-.98.189-1.589.189-.741 0-1.36-.099-1.857-.298-.497-.199-.89-.487-1.182-.865a3.433 3.433 0 0 1-.616-1.372 8.546 8.546 0 0 1-.179-1.84v-9.01zm16.902 2.745c-1.072 3.952-2.317 7.532-3.734 10.74a10.786 10.786 0 0 1-.814 1.531 4.54 4.54 0 0 1-.933 1.054c-.34.276-.732.483-1.152.607a5.173 5.173 0 0 1-1.47.189 5.18 5.18 0 0 1-1.102-.119c-.364-.08-.639-.166-.824-.259l.437-1.929a3.86 3.86 0 0 0 1.41.278c.622 0 1.109-.149 1.46-.448.351-.298.659-.759.924-1.382a55.873 55.873 0 0 1-2.175-4.773 52.914 52.914 0 0 1-1.857-5.489h2.562c.132.557.295 1.16.487 1.81a55.804 55.804 0 0 0 1.341 3.978c.235.623.487 1.24.755 1.85.424-1.18.821-2.436 1.192-3.769.358-1.284.696-2.574 1.013-3.868h2.483z" fill="#16205A"/></g></svg>
                <svg width="12" height="7" role="img" arial-labelledby="algc-icon-separator-alt" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
  <title id="algc-icon-separator-alt">menu with dropdown</title>
  <path d="M6.458 3.58L2.81.37C2.344-.04 1.634.01 1.225.477c-.41.468-.362 1.18.105 1.59L5.51 5.74s.537.375 1.05.356c.515-.02.984-.433.984-.433l4.072-3.596c.467-.41.515-1.12.107-1.59C11.315.01 10.605-.04 10.138.37l-3.68 3.21z" fill="#FFF" fill-rule="evenodd" />
</svg>

              </a>
            </li>
            
    <li class="algc-navigation__li">
      <a class='algc-badge algc-navigation__navitem' href='https://community.algolia.com/instantsearch.js/v2/ '
       data-dropdown="links" data-enabledropdown="false">
            <svg class="algc-arrowseparator" viewBox="0 0 18 35" xmlns="http://www.w3.org/2000/svg"><g id="Symbols" fill="none" fill-rule="evenodd"><g id="community/header" fill="#3369E6"><g id="Group-13"><g id="Group-2"><path id="Combined-Shape-Copy" d="M1.8537 34.7643l15.5597-17.268L1.8537 0H0l15.5597 17.4964L0 34.7644z"/></g></g></g></g></svg>
            
            <span>InstantSearch.js</span>
      </a>
    </li>
          </ul>

          <div class='algc-navigation__menu'>
            
    <div class='algc-menu__search'>
      <div class='algc-menu__search--holder'>
        <div class='algc-search__input algc-search__input--docsearch'>
          <input id='searchbox' placeholder='Search the docs' type='search'>
          <button id='search'>
            <svg role="img" aria-labelledby="algc-top-search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
  <title id="algc-top-search-icon">Open search input</title>
  <path d="M10.052 10.88c-1.1.91-2.483 1.406-3.91 1.403C2.75 12.283 0 9.533 0 6.14 0 2.75 2.75 0 6.142 0c3.392 0 6.14 2.75 6.14 6.142 0 1.485-.526 2.847-1.403 3.91l3.95 3.95c.227.227.228.596-.002.826-.228.227-.597.228-.826 0l-3.95-3.95zm-3.91.234c2.745 0 4.972-2.227 4.972-4.972 0-2.747-2.227-4.972-4.972-4.972-2.747 0-4.972 2.225-4.972 4.972 0 2.745 2.225 4.972 4.972 4.972z" fill="#FFF" fill-rule="evenodd" />
</svg>

          </button>
          <button id='cancel'>
            <svg role="img" aria-labelledby="algc-top-search-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13">
  <title id="algc-top-search-close">Close search input</title>
  <path d="M5.274 6.5L.614 1.84 0 1.225 1.226 0l.613.613 4.66 4.66 4.66-4.66.614-.613L13 1.226l-.613.613-4.66 4.66 4.66 4.66.613.614L11.774 13l-.613-.613-4.66-4.66-4.66 4.66-.614.613L0 11.774l.613-.613" fill="#FFF" fill-rule="evenodd" />
</svg>

          </button>
        </div>
      </div>
    </div>
            <ul class='algc-menu__list'>
      <li class="algc-menu__list__item ">
        <a href="getting-started.html"  class="">
          <span class='hidden-sm'>Getting Started</span>
          
        </a>
        
      </li>
      <li class="algc-menu__list__item algc-menu--hassublist">
        <a href="#"  class="algc-menu--sublistlink">
          Guides
          <span class="algc-glyph">▼</span>
        </a>
        <ul class='algc-menu__sublist'>
    <li>
      <a href="guides/usage.html" >Use InstantSearch.js</a>
    </li>
  
    <li>
      <a href="guides/customization.html" >Customize widgets</a>
    </li>
  
    <li>
      <a href="guides/no-result.html" >Design the no result page</a>
    </li>
  
    <li>
      <a href="guides/opensearch.html" >Integrate OpenSearch</a>
    </li>
  
    <li>
      <a href="guides/custom-widget.html" >Create new widgets</a>
    </li>
  
    <li>
      <a href="guides/migration.html" >Migrate from V1</a>
    </li>
  
    <li>
      <a href="guides/angular-integration.html" >Integrate with Angular (2+)</a>
    </li>
  </ul>
      </li>
      <li class="algc-menu__list__item algc-menu--hassublist">
        <a href="#"  class="algc-menu--sublistlink">
          API
          <span class="algc-glyph">▼</span>
        </a>
        <ul class='algc-menu__sublist'>
    <li>
      <a href="instantsearch.html" >instantsearch()</a>
    </li>
  
    <li>
      <a href="widgets.html" >Widgets</a>
    </li>
  
    <li>
      <a href="connectors.html" >Connectors</a>
    </li>
  </ul>
      </li>
      <li class="algc-menu__list__item ">
        <a href="examples.html"  class="">
          <span class='hidden-sm'>Demos</span>
          
        </a>
        
      </li>
      <li class="algc-menu__list__item ">
        <a href="https://github.com/algolia/instantsearch.js/"
          
          class="">
          <img src='assets/img/github-icon.svg'/>
          
        </a>
        
      </li></ul>
            <button class='algc-openmobile'><span></span></button>
          </div>
          
          <div class='algc-navigation__dropdown-holder'>
            <div class='algc-dropdownroot notransition'>
              <div class='algc-dropdownroot__dropdownbg'></div>
              <div class='algc-dropdownroot__dropdownarrow'></div>
              <div class='algc-dropdownroot__dropdowncontainer'>
                
    <div class="algc-dropdownroot__section">
      <div class="algc-dropdownroot__content" data-dropdown-content="integrations">
      <ul class="algc-dropdownroot__widelist">
  <li>
    <div class="dropdown-item">
      <a href="https://community.algolia.com/places/" >
        <span class="item-icon" style="background: #3a5395">
          <img src="https://community.algolia.com/places/images/svg/places-illustration-65745839.svg" alt="places.js" />
        </span>
        <h4>places.js</h4>
      </a>
    </div>
  </li>
  <li>
    <div class="dropdown-item">
      <a href="https://community.algolia.com/wordpress" >
        <span class="item-icon" style="background: linear-gradient(to bottom right, #4041B2, #516ED1)">
          <img src="https://community.algolia.com/wordpress/img/icons/wp-icon.svg" alt="wordpress" />
        </span>
        <h4>wordpress</h4>
      </a>
    </div>
  </li>
  <li>
    <div class="dropdown-item">
      <a href="https://github.com/algolia/autocomplete.js" >
        <span class="item-icon" style="background: #00587f">
          <img src="https://community.algolia.com/img/illus-autocomplete.svg" alt="Autocomplete.js" />
        </span>
        <h4>Autocomplete.js</h4>
      </a>
    </div>
  </li>
  <li>
    <div class="dropdown-item">
      <a href="https://community.algolia.com/instantsearch.js/react" >
        <span class="item-icon" style="background: linear-gradient(45deg, #3369e7, #00aeff), linear-gradient(#fafafa, #fafafa)">
          <img src="https://community.algolia.com/img/logo-react-instantsearch.svg" alt="InstantSearch React" />
        </span>
        <h4>InstantSearch React</h4>
      </a>
    </div>
  </li>
  <li>
    <div class="dropdown-item">
      <a href="https://community.algolia.com/algoliasearch-helper-js/" >
        <span class="item-icon" style="background: #FDBD57">
          <img src="https://community.algolia.com/img/logo-helper.svg" alt="Helper.js" />
        </span>
        <h4>Helper.js</h4>
      </a>
    </div>
  </li>
  <li>
    <div class="dropdown-item">
      <a href="https://community.algolia.com/magento/" >
        <span class="item-icon" style="background: linear-gradient(to bottom right, #ed9259, #e76d22)">
          <img src="https://res.cloudinary.com/hilnmyskv/image/upload/v1477318624/magento-icon-white.svg" alt="magento" />
        </span>
        <h4>magento</h4>
      </a>
    </div>
  </li></ul>
        <div class="algc-dropdownroot__footer">
          <a href="https://discourse.algolia.com/?ref=communityHeader">
            <span style="font-weight:bold;">Community Forum</span>
          </a>
        </div>
        </div>
        </div>
    <div class="algc-dropdownroot__section">
      <div class="algc-dropdownroot__content" data-dropdown-content="links">
      <ul class="algc-dropdownroot__widelist"></ul>
        <div class="algc-dropdownroot__footer">
          <a href="https://discourse.algolia.com/?ref=communityHeader">
            <span style="font-weight:bold;">Community Forum</span>
          </a>
        </div>
        </div>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class='algc-mobilemenu'><div class='algc-mobilemenuwrapper'><ul class='algc-mobilemenulist'>
      <li class="algc-mobilemenu__item">
        <a href="getting-started.html" >
          Getting Started
        </a>
      </li>
      <li class="algc-mobilemenu__item">
        <a href="guides/usage.html" >
          Use InstantSearch.js
        </a>
      </li>
      <li class="algc-mobilemenu__item">
        <a href="guides/customization.html" >
          Customize widgets
        </a>
      </li>
      <li class="algc-mobilemenu__item">
        <a href="guides/no-result.html" >
          Design the no result page
        </a>
      </li>
      <li class="algc-mobilemenu__item">
        <a href="guides/migration.html" >
          Migrate from V1
        </a>
      </li>
      <li class="algc-mobilemenu__item">
        <a href="instantsearch.html" >
          instantsearch()
        </a>
      </li>
      <li class="algc-mobilemenu__item">
        <a href="widgets.html" >
          Widgets
        </a>
      </li>
      <li class="algc-mobilemenu__item">
        <a href="connectors.html" >
          Connectors
        </a>
      </li>
      <li class="algc-mobilemenu__item">
        <a href="examples.html" >
          Demos
        </a>
      </li></ul></div></div>

    </nav>
    <!-- End community_header --> </div><script src="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js"></script><section class="hero hero-doc fill-titan"><div class="spacer120"></div><div class="container"><div class="col-md-12 h200 text-left"><h1 class="text-heading color-white"><span class="text-thin">Guides  <span class="text-xl vertical-align-middle"><svg width="28"  viewBox="0 0 84 85" xmlns="http://www.w3.org/2000/svg"><path d="M80.267 47.867L8.683 83.657c-2.964 1.483-6.568.282-8.05-2.682C.217 80.142 0 79.223 0 78.292V6.708c0-3.314 2.686-6 6-6 .93 0 1.85.217 2.683.634l71.584 35.79c2.964 1.483 4.165 5.087 2.683 8.05-.58 1.162-1.522 2.104-2.683 2.685z" fill="#FFF" fill-rule="evenodd"/></svg></span> </span> <span class="text-normal">Designing the no-result page</span></h1></div></div></section><section class="documentation-section"><div class="container"><nav class="sidebar pos-abt"><div class="sidebar-container"><ul class="sidebar-elements"></ul></div></nav><a class="sidebar-opener"></a><div class="documentation-container"><a class="editThisPage" href="http://github.com/algolia/instantsearch.js/edit/develop/docgen/src/guides/no-result.md">Edit this page</a><div class="content">## Designing the no results page

When a query returns no results, it is important to let the user know that their query led to no results.

By doing so, we’re acknowledging that not all queries lead to some result and with some additional hints we can let them continue to use the search. This way, there is less chance that the user will leave the website to do a search to an external search engine.

There are various strategies that can be implemented for the no-result. This guide will walk you through one that can be easily implemented with InstantSearch.js:
  - first we'll improve the message that we provide to the user
  - then we’ll add a button to let the user clear the filters

## Display a message

By default, InstantSearch.js will only display "no results" when there are no results. The bare minimum to handle the no-result case is to provide the user with a message that indicates that no results were found in a friendly fashion.

In order to do that, we can use the InstantSeach.js’ Hits widget option [templates.empty](https://community.algolia.com/instantsearch.js/v2/widgets/hits.html#struct-HitsTemplates-empty):

```javascript
const search = instantsearch(/* parameters */);
search.addWidget(instantsearch.widgets.hits({
  container: 'hits',
  templates: {
    empty: '<p class="info">No results were found with your current filters. Try to remove some filters or change the search query.</p>',
    item: yourItemTemplate
  },
}));
```

When there are no results, the user will see a paragraph that says: "No results were found with your current filters. Try to remove some filters or change the search query.".

## Let the user clear all the filters

To go further, we can also let the user clear the filters and start their search from scratch. This way, we allow the user to make mistake.

To be able to do this part, you need to have the URL sync mechanism activated so that we can easily clear the filters using the URL. You can activate the URL Sync by adding to your InstantSearch instance:

```javascript
const search = instantsearch({
  /* your other parameters */
  urlSync: true
});
```

This will give you a basic configuration of the url sync. Check out the [reference](instantsearch.html#struct-InstantSearchOptions-urlSync) if you want to learn more about URL sync.

URL sync makes your InstantSearch.js app aware of changes in the URL. With this, we can easily influence the parameters of the search. In this case, we want to clear all the filters so we can make a link to this page, without the parameters.

We do this by customizing again the no-result template and adding it a clear all link:

```javascript
const search = instantsearch(/* parameters */);
search.addWidget(instantsearch.widgets.hits({
  container: 'hits',
  templates: {
    empty: '<p class="info">No results were found with your current filters. <br/> <a class="button" href=".">Clear all the filters</a></p>',
    item: yourItemTemplate
  },
}));
```

The secret of this last part is to use `.` as the href of the "clear all the filters" link. You can go further and make this link look like a button.

## Conclusion

In this guide, you’ve learned:

  * The value of providing a clear no-result page
  * How to make the messaging more friendly
  * How to let the user clear all the filters when there are no results
</div></div></div></section><section class="footer-new-cta footer-new h300 pos-rel"><div class="container color-white stellar-container vh-center"><div class="col-md-5"><div class="spacer120 hidden-sm"></div><div class="spacer32 visible-xs"></div><header><h2 class="text-normal m-t-none">Start creating stellar search,<span class="cf hidden-xs"></span>no strings attached.</h2><p>Dive into Algolia with our 14-day trial - No credit card required. Plenty of time to see how Algolia can change your business.</p></header></div><div class="col-md-7 pos-rel z-10"><div class="spacer120 inline hidden-sm"></div><div class="spacer32 inline hidden-sm"></div><div class="spacer16 visible-sm"></div><div class="button-holder h200 p-r-large"><div class="spacer16 hidden-md hidden-sm"></div><span class="inline pos-rel"><a class="btn btn-static-primary btn-static-shadow-dark" href="https://algolia.com/users/sign_up">Get Started<svg class="arrow-icon" width="22"><use xlink:href="#arrow-right"></use></svg></a><svg class="search-icon" width="22"><use xlink:href="#search-icon"></use></svg></span></div></div></div></section><div id="footer"><div class="credits"><div class="container pos-rel"><div class="row"><div class="col-md-12 text-center"><a data-no-turbolink="true" href="/"><img width="40" src="https://www.algolia.com/static_assets/images/flat2/algolia/algolia-logo_badge-598a1fe6.svg"></a></div></div><div class="spacer40"></div></div></div></div><svg style="display: none;"><symbol width="40" height="40" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" id="search-icon"><path d="M26.806 29.012a16.312 16.312 0 0 1-10.427 3.746C7.33 32.758 0 25.425 0 16.378 0 7.334 7.333 0 16.38 0c9.045 0 16.378 7.333 16.378 16.38 0 3.96-1.406 7.593-3.746 10.426L39.547 37.34c.607.608.61 1.59-.004 2.203a1.56 1.56 0 0 1-2.202.004L26.808 29.012zm-10.427.627c7.32 0 13.26-5.94 13.26-13.26 0-7.325-5.94-13.26-13.26-13.26-7.325 0-13.26 5.935-13.26 13.26 0 7.32 5.935 13.26 13.26 13.26z" fill-rule="evenodd"></path></symbol><symbol width="46" height="38" viewbox="0 0 46 38" xmlns="http://www.w3.org/2000/svg" id="arrow-right"><path d="M34.852 15.725l-8.624-9.908L24.385 3.7 28.62.014l1.84 2.116 13.1 15.05 1.606 1.846-1.61 1.844-13.1 15.002-1.845 2.114-4.23-3.692 1.85-2.114 9.465-10.84h-24.66v-5.615h23.817zm-26.774 0h-.002 2.96v5.614H0v-5.615h8.078z" fill-rule="evenodd"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewbox="0 0 708.8 717" id="icon-copy"><path d="M658.8 158H490.2c-13.3 0-26 5.3-35.4 14.6l-4.6 4.6V25c0-13.8-11.2-25-25-25H235.6c-6.6 0-13 2.6-17.7 7.3L7.3 218C2.6 222.6 0 229 0 235.6V541c0 13.8 11.2 25 25 25h227.8v101c0 27.6 22.4 50 50 50h356c27.6 0 50-22.4 50-50V208c0-27.6-22.4-50-50-50zm-204 85.4V360H338.2l116.6-116.6zm-253-149.2V209H87L201.8 94.2zM50 516V259h176.8c13.8 0 25-11.2 25-25V50h148.4v177.3L267.5 360c-9.4 9.4-14.6 22.1-14.6 35.4V516H50zm608.8 151h-356V410h177c13.8 0 25-11.2 25-25V208h154v459z"></path></symbol></svg><script src="/js/main.js"></script><script type="text/javascript">var _kmq = _kmq || [];
var _kmk = _kmk || 'cb5a3adb92e8915a37a36ba1a50f2ce4fae4a1b9';
function _kms(u){
  setTimeout(function(){
    var d = document, f = d.getElementsByTagName('script')[0],
    s = d.createElement('script');
    s.type = 'text/javascript'; s.async = true; s.src = u;
    f.parentNode.insertBefore(s, f);
  }, 1);
}
_kms('//i.kissmetrics.com/i.js');
_kms('//scripts.kissmetrics.com/' + _kmk + '.2.js');</script></body>