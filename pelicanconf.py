AUTHOR = 'Francis Tayag'
SITENAME = 'Francis Tayag'
SITESUBTITLE = 'Pixel artist, game developer'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Asia/Shanghai'

DEFAULT_LANG = 'EN'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'https://getpelican.com/'),
         ('Python.org', 'https://www.python.org/'),
         ('Jinja2', 'https://palletsprojects.com/p/jinja/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('linkedin', 'https://www.linkedin.com/in/francistayag/'),
          ('twitter', 'https://twitter.com/zyenapz'),
          ('github', 'https://github.com/zyenapz'),)

DEFAULT_PAGINATION = False

# Themes
THEME = 'pelican-themes/Peli-Kiera'

# Plugins
PLUGIN_PATHS = ['pelican-plugins']
PLUGINS = ['readtime', 'neighbors']

DISPLAY_CATEGORIES_ON_MENU = False

OUTPUT_PATH = "docs/"

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True