toggleDarkMode() {
			if (document.documentElement.getAttribute('data-layout-mode') == 'dark') {
				document.documentElement.setAttribute('data-layout-mode', 'light')
				document.documentElement.setAttribute('data-sidebar', 'light')
			} else {
				document.documentElement.setAttribute('data-layout-mode', 'dark')
				document.documentElement.setAttribute('data-sidebar', 'dark')
			}
		}
