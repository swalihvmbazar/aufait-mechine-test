
const DiscussionBoardSection = () => {
    return (
        <div className="bg-white p-6">
            <h3 className="font-bold mb-3">Discussion Board</h3>
            <div className="relative h-47.5 overflow-hidden mb-7">
                <img
                    src="discussion-board.jpg"
                    alt="Discussion Board"
                    className="w-full h-full object-cover"
                />
            </div>
            <h4 className="font-semibold text-sm mb-2 mt-3">New Partnership Announcement</h4>
            <p className="text-xs text-gray-600 mb-4.5">
                A description board might be used to showcase important details about ongoing projects, tasks, or key objectives. It can also display descriptions of team roles, product features, or company policies.
            </p>
            <a href="#" className="text-[#707070] text-sm hover:underline">Read More</a>
        </div>
    );
}

export default DiscussionBoardSection;
