#!/usr/bin/python

'''
Helper program to generate productlist from an excel file
'''

import sys, argparse, openpyxl, json
from openpyxl import load_workbook

def convert(input, output):
    try:
        wb = load_workbook(filename=input, read_only=True)
    except openpyxl.utils.exceptions.InvalidFileException:
        print("input file must be an excel file")
        sys.exit(2)
    except IOError as e:
        print(e)

    ws = wb.active

    #products json to output
    products = []

    for row in ws.rows:
        product = {}
        product['name'] = row[0].value
        product['description'] = row[1].value
        product['price'] = row[2].value
        product['id'] = row[3].value


        products.append(product)

    file = open(output, 'w')
    file.write("let products = ")
    file.write(json.dumps(products))
    file.write("\nexport default products")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("inputfile", help="excel file to read from", type=str)
    parser.add_argument("outputfile", help="js file to write to", type=str)
    args = parser.parse_args()

    convert(args.inputfile, args.outputfile)
