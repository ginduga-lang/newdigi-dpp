export default function AdminToolbar() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

<div className="grid gap-4 lg:grid-cols-4">

<input placeholder="Search Part..." />

<select>
<option>All Status</option>
<option>Active</option>
<option>Inactive</option>
</select>

<select>
<option>All Manufacturers</option>
</select>

<button>
Reset Filters
</button>

</div>

</div>
  );
}