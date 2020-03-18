# project heading

# MUSIC. 

View the project on Github pages [here](then input the deployed github page URL here)

##An introduction to the project

The 'MUSIC.' site offers users the chance to indulge their curiosity by searching for a musical artist or band and to preview 30 second clips of their most popular songs. The experience is clean and stripped back to allow the user to fulfill their goal easily.

The 'MUSIC.' site incorporates an API from the music streaming service 'Deezer' which hosts over 30 million tracks. Even though Deezer does offer a subscription service, the 'MUSIC.' site doesn't require the user to login to a Deezer account to perform the search or listen to the 30 second clips which opens it up to everyone. 

## UX

### Site Users - who is the site focused on?
1. Ria, “I’m on my way to see Jax Jones tonight and want to see what his most popular songs are”.
2. Jen, “I’m on my way to karaoke and know I want to sing Britney Spears but can’t remember which songs I know. I want to see a list of songs and hear their clips to jog my memory”
3. Harry, “I want to hear Bucks Fizz songs because I’m a big fan”
4. Rachael, “There’s a singer called George something who sings a really catchy song that’s stuck in my mind, but I don’t know the title of the song! I need to search for singers called George and hear their songs to try find out the title”

### The 'MUSIC.' site is the best place for users to achieve their goals because: 
- The site is easy to navigate with clear instructions, steps and accessibility
- The site is easily accessible without the need for login details or a subscription
- It provides users with an easy solution to finding a specific song by an artist or group 
- It allows users to easily explore an artist or group's most popular songs
- It provides users with the option to listen to a 30 second clip of all songs

# WIREFRAMES

## FEATURES

The site is based around a single page layout. 
The design of the site is very stripped back, with a black and white colour scheme with neon green to highlight clicked elements. 

The site opens with the heading 'MUSIC.' and a brief introduction to the site and its features. The introduction consists of only two short sentences. The heading will appear in the top left hand side on desktop and tablet sized screens, and top center on mobile sized screens. The instruction copy will always sit below it.

The user enters the artist name into the input box. When the user clicks into the input box, it clears the text 'artist name here'. When the search button is clicked (NEED TO UPDATE THIS WITH OR ENTER BUTTON PRESSED) this BOX automatically clears whatever value the user has input into the box and replaces it with the original text 'artist name here'. This encourages the user to repeat the process and perform another search. If the search doesn't return any results (which could be due to incorrect spelling or the artist not being on the Deezer database), an error message will show up asking the user to try again.
Next to the input box is the search button, which will search for whatever the user has entered into the input box. When the search button is clicked, this clears the text the user has typed into the input box. 

When the user clicks 'search' the artist results will appear in a column to the right hand side. They will appear beneath a header that says 'artist' along with instructions on what to do. The search results will be filtered to only show names which include the actual name the user has searched for. The artist(s) name results will appear in a list. Each of the names will be a clickable button and will be highlighted green when hovered over. On a screen size smaller than a tablet, the column header will appear below the search button with the artist name results appearing below this. 

If the user at this stage decides to conduct a new search, they can type a new name into the artist box, click 'search' and the previous results will be wiped.

When the user clicks on any of the returned artist (or group's) names, it will call a new search for that artist's most popular songs. The popular songs will appear in a column to the right of-top