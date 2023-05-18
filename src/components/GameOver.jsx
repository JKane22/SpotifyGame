function GameOver({ isOpen, onReset, score }) {
  if (!isOpen) {
    return null;
  }

  const handleReset = () => {
    // Call the onReset callback function
    onReset();
  };

  const LoseMessage = () => {
    switch(score) {
      case 0:
        return "You didn't even get past the first stage! LUL";
      case 1:
        return "Okay, you got past the first stage! Good job!";
      case 5:
        return "You got to 5, you're a legend!";
      case 10:
        return "You got to 10, OMG!";
      default:
        return "Unlucky, you did okay. Try again!";
    }
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-95"
      style={{ zIndex: 9999 }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-black mb-4 text-center text-black">
          Game Over!
        </h2>
        <p className="mb-4 text-center text-2xl text-gray-700">
          Your Score: <span className="text-black font-bold text-4xl">{score}</span>
        </p>
        <p className="mb-4 text-center text-2xl text-gray-700">{LoseMessage()}</p>
        <button
          className="block mx-auto bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => handleReset()}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default GameOver;
