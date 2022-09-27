import categories from '../../models/data.js';
import Directory from '../../components/directory/directory.component.jsx';

function Home() {
  return (
    <div className="px-6 py-6">
			<Directory categories={categories} />
    </div>
  );
}

export default Home;
