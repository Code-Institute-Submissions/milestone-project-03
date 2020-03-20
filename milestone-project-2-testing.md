# Testing 'MUSIC.' website

## Testing
- HTML validated using [W3C Validator](https://validator.w3.org/)
- CSS validated using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) 
- JS validated using [JSHint](https://jshint.com/)

## Testing client stories from the UX section of milestone-project-2-readme.md

1. _"I’m on my way to see Jax Jones tonight and want to see **what his most popular songs are**”_
- The user can fulfill their mission in 3 steps to show Jax Jones's most popular songs: _Type artist name into input box, click search button, click on artist name_

2. _“I’m on my way to karaoke and know I want to sing Britney Spears but can’t remember which songs I know. I want to **see a list of songs** and **hear clips of the songs** to jog my memory”_
- The user can easily fulfill the first part of their mission in 3 steps: _Type artist name into input box, click search button, click on artist name_
- To fulfill the second part of their mission, they need to add 2 more steps: _Click on song title, click play in audio source_

3. _“I want to hear Bucks Fizz songs because I’m a big fan”_
- The user can easily fulfill their mission in 5 steps: _Type artist name into input box, click search button, click on artist name, click on song title, click play in audio source_

4. _“There’s a singer called George something who sings a really catchy song that’s stuck in my mind, but I don’t know the title of the song! I might recognise the title if I saw it but would need to search for singers called George and hear the songs to try find out the title”_
- The user can easily fulfill their mission in 3 steps (which would need to be repeated for different artists): _Type artist name into input box, click search button, click on artist name_ (the user could now potentially see the song title in this list)
- The user may need to take 2 additional steps to listen to the songs to jog their memory (these steps may need to be repeated for different artists): _Click on song title, click play in audio source_

## Manual (logical) testing of all elements and functionality on every page.

### Permanent elements 
1. **Heading** 
- Open the page and see that the site heading is visible on all screen sizes and at the top
- Reduce screen size to check site heading reduces in size
- Reduce screen size to check that site heading sits on the left in desktop but above all other elements on tablet and mobile sized screens

2. **Introduction**
- Check that short introduction sentences sit below the site heading on all screen sizes

3. **Input box**
- Click inside the input box to see the preset value clear
- Type an artist name into input box
- Reduce screen size to check it always sits below the introduction sentences

4. **Search button** 
- Reduce screen size to check that search button moves from the right hand side of the input box on a desktop and tablet, to below the input box on a mobile screen
- Click on search button when artist name has been typed into input box to perform a search and to check that the button turns from black with white text to neon green with white text
- Check that the artist name from the input box is cleared when search button is clicked

#### Appear on page after functions are executed
1. **Artist column** 
- Check that a new column appears with the search results
- Reduce screen size to check that the new column will appear to the right hand side of the permanent elements on a desktop and below the search button on a tablet sized screen and smaller 
- Check that there is a 1px solid black border on the left hand side of the column 
- Reduce screen size to check the border disappears on a tablet sized screen and smaller

2. **Header**
- Check that a header with the column title 'artist' appears along with the search results
- Reduce screen size to check it sits beneath the search button on a mobile screen

3. **Short instruction**
- Check that a short instruction appears beneath the header
- Check that there is a subtle green bottom border beneath the instruction
- Reduce screen size and check that the instruction always sits beneath the header
- Reduce the screen size to see that the instruction on a mobile screen contains additional instruction regarding songs appearing below artist results

4. **Clickable buttons**
- Check that the artist name(s) has been returned in the new column, on the right hand side of the permanent elements
- Reduce screen size to check that the artist name sits beneath the header and short instruction
- Hover over the artist name(s) to check the font increases in size and weight and the background becomes bright green when hovered over

5. **Click on a name**
- Click on a name to perform a search for that artist's most popular songs to make a new column appear to the right hand side

6. **Songs column**
- Check that a new column has appeared on the right hand side of the 'artist column' on a desktop sized screen
- Reduce the screen size to check that the column still sits next to the 'artist column' on a tablet sized screen and beneath it on a mobile sized screen
- Check that there is a 1px solid black border on the left hand side of the column
- Reduce screen size to check the 1px solid black border is still visible on a tablet sized screen and disappears on a mobile

7. **Header**
- Check that a 'songs' header appears in the new column
- Reduce screen size to check it sits beneath the artist names on a mobile sized screen

8. **Short instruction**
- Check that a short instruction appears beneath the header
- Check that there is a subtle green bottom border beneath the instruction
- Reduce screen size and check that the instruction always sits beneath the header
- Reduce screen size to see that the instruction on a mobile screen contains additional instruction regarding the song preview appearing at the top of the screen

9. **Clickable button**
- Check that song titles appear in the new 'song column', on the right hand side of the 'artist column' on a desktop sized screen
- Reduce screen size to check that the song titles sit beneath the 'songs' header on a mobile screen
- Hover over song titles to check that their backgrounds turn green and the font size and weight increase

10. **Click on a song title**
- Click on a song title to preview a clip of that song, its album artwork and to make a new column appear to the right hand side of the 'songs column' 

11. **Preview column**
- Check that a new 'preview column' has appeared to the right side of the 'songs column'
- Reduce the screen size to check that the 'preview column' sits on the right of the 'songs column' on a tablet sized screen but disappears on a mobile sized screen
- Check that there is a 1px solid black border on the left hand side of the column on desktop and tablet sized screens

12. **Header**
- Check that a 'listen' header appears at the top of the 'preview column' on a desktop and tablet sized screen
- Reduce screen size to check that header isn't visible on a mobile sized screen

13. **Short instruction**
- Check that short instruction appear beneath the header on desktop and tablet sized screens
- Reduce screen size to check that the short instruction doesn't appear on a mobile sized screen
- Check that a subtle green border appears beneath the short instruction on a desktop and tablet sized screen

14. **Audio player**
- Check that an audio player appears in the 'preview column' beneath the short instruction
- Click on a different song title to check that the audio content updates
- See that the song clip doesn't start playing automatically when audio player appears
- Press play on the audio-player to check it is the correct song playing
- Increase and decrease screen size to check audio player remains at 100% width
- Reduce the screen size to check that the audio player appears at the top of the viewport on a mobile sized screen in the neon green bar

15. **Now playing**
- Check that a the song title appears beneath the audio player, after the text 'now playing:' 
- The text should appear beneath the audio player on all screen sizes

16. **Album artwork**
- Check that album artwork appears beneath the 'now playing' text on a desktop and tablet sized screen
- Increase and decrease screen size to check album artwork remains at 100% width
- Reduce screen size to mobile to check that the artwork is no longer visible
- Click on a different song title to check that the album artwork updates to the new album

17. **Sticky**
- On a desktop and tablet sized screen, scroll down the page to check that the audio player is sticky and stays in the top right hand of the viewport when scrolling down
- Scroll down the page on a mobile screen to check that the audio player stays at the top of the viewport when scrolling down

18. **Reset**
- Type a new artist name into the input box and click search to check that all the previous search results (artist names, song titles, preview clip, 'now playing' text and album artwork) is cleared

## Further testing:

1. Asked fellow students to look at the site and report any issues they encountered. Issues spotted include:
- xxxxxxxxxxxxxxxxxxxx
- xxxxxxxxxxxxxxxxxxxx
2. Asked friends and family to test the site for ease of use
3. The website has been viewed on different browsers, no issues were found 