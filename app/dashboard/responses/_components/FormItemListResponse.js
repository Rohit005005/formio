import { Button } from "@/components/ui/button";
import { db } from "@/configs";
import { userResponses } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

function FormItemListResponse({ jsonForm, formRecord }) {
  const [loading, setLoading] = useState(false);
  const [responseNumber, setResponseNumber] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await db
      .select()
      .from(userResponses)
      .where(eq(userResponses.formRef, formRecord.id));

    if (result && result.length > 0) {
      setResponseNumber(result.length);
    }
  };

  const ExportData = async () => {
    let jsonData = [];
    setLoading(true);
    const result = await db
      .select()
      .from(userResponses)
      .where(eq(userResponses.formRef, formRecord.id));

    if (result) {
      setLoading(false);
      result.forEach((item) => {
        const jsonItem = JSON.parse(item.jsonResponse);
        jsonData.push(jsonItem);
      });
    }
    exportToExcel(jsonData);
  };

  const exportToExcel = (jsonData) => {
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, jsonForm?.formTitle + ".xlsx");
  };

  return (
    <div className="border shadow-sm rounded-lg p-4 my-5">
      <h2 className="text-lg text-black">{jsonForm?.formTitle}</h2>
      <h2 className="text-sm text-gray-500">{jsonForm?.formHeading}</h2>
      <hr className="my-4" />
      <div className="flex justify-between items-center">
        <h2 className="text-sm">
          <strong>{responseNumber}</strong> responses
        </h2>
        <Button size="sm" onClick={() => ExportData()} disabled={loading}>
          {loading ? <Loader2 className="animate-spin" /> : "Export"}
        </Button>
      </div>
    </div>
  );
}

export default FormItemListResponse;
