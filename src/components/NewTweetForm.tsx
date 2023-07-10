import "../styles/content.css";

function NewTweetForm() {
  return (
    <>
      <form action="" className="newTweetForm">
        <label htmlFor="newTweet" className="newTweet">
          <img id="userImage" src="https://github.com/marcelooliveira1999.png" alt="userImage" />
          <textarea name="newTweet" id="newTweet" placeholder="What's happening?"></textarea>
        </label>

        <button type="submit" className="tweeterButtons">
          Tweet
        </button>
      </form>
    </>
  );
}

export default NewTweetForm;
