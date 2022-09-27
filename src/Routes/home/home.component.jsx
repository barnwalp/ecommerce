import categories from '../../models/data.js';
import Directory from '../../components/directory/directory.component.jsx';

function Home() {
  return (
    <div className="px-6 py-6">
			<h1 className="mx-auto mb-6 text-3xl max-w-max">E-Commerce</h1>
			<Directory categories={categories} />
    </div>
  );
}

export default Home;
