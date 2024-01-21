//fetch post

export default function Commit() {
    return (
      <div>
        <h2>Commit New Post</h2>
        <input>Content</input>
        <select name="cat" id="cat">
            <option>Technology</option>
            <option>Lifestyle</option>
            <option>Education</option>
        </select>
        <button>Commit Post</button>
      </div>
    );
  }