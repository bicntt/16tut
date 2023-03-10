import React from "react";
import Feed from "./Feed";

const Home = ({ posts, isLoading, fetchError }) => {
    console.log("Home page");
    return (
        <main className="Home">
            {isLoading && <p className="statusMsg">Loading posts...</p>}
            {fetchError && (
                <p className="statusMsg" style={{ color: "red" }}>
                    {fetchError}
                </p>
            )}
            {!isLoading &&
                !fetchError &&
                (posts.length ? (
                    <Feed posts={posts} />
                ) : (
                    <p>No posts to display.</p>
                ))}
        </main>
    );
};

export default Home;
